/* Generated from Rain Digit github-tour-embed.ts. */
"use strict";
// Source for the portable script used by the isolated GitHub hosting test.
(() => {
    const script = document.currentScript;
    if (!script?.src)
        return;
    const mount = document.getElementById(script.dataset.container ?? 'raindigit-tour');
    if (!mount || mount.querySelector('iframe'))
        return;
    const container = mount;
    const packages = {
        'killarney-360-property-tour-demo': 'bounded-1bbdc11e39b6',
        'killarney-home-360-tour': 'bounded-44383d674c4f',
        'killarney-town-centre-360-tour': 'bounded-d7b665651751'
    };
    const slug = script.dataset.tour ?? 'killarney-360-property-tour-demo';
    const version = packages[slug];
    if (!version)
        return;
    const packageUrl = new URL(`../tours/${slug}/${version}/index.html`, script.src);
    const origin = packageUrl.origin;
    const parentParams = new URLSearchParams(location.search);
    for (const name of ['scene', 'yaw', 'pitch', 'hfov']) {
        const value = parentParams.get(name);
        if (value)
            packageUrl.searchParams.set(name, value);
    }
    packageUrl.searchParams.set('autostart', '1');
    packageUrl.searchParams.set('embed', '1');
    packageUrl.searchParams.set('parentOrigin', location.origin);
    const status = container.querySelector('[data-tour-status]');
    const frame = document.createElement('iframe');
    frame.title = script.dataset.title ?? 'Killarney interior 360 tour';
    frame.className = 'github-tour-frame';
    frame.allow = 'fullscreen';
    frame.setAttribute('allowfullscreen', '');
    frame.setAttribute('webkitallowfullscreen', '');
    frame.referrerPolicy = 'strict-origin-when-cross-origin';
    frame.loading = 'eager';
    container.dataset.tourState = 'loading';
    container.dataset.tourPackage = version;
    let ready = false;
    let previousOverflow = '';
    function setFullscreen(active) {
        if (active === container?.classList.contains('github-tour-fullscreen'))
            return;
        if (active) {
            previousOverflow = document.documentElement.style.overflow;
            document.documentElement.style.overflow = 'hidden';
        }
        else {
            document.documentElement.style.overflow = previousOverflow;
        }
        container?.classList.toggle('github-tour-fullscreen', active);
        frame.contentWindow?.postMessage({ type: 'raindigit-tour-fullscreen-state', active }, origin);
    }
    function queryReady() {
        frame.contentWindow?.postMessage({ type: 'raindigit-tour-ready-query', version: 1, slug }, origin);
    }
    const queryTimer = window.setInterval(queryReady, 500);
    const recoveryTimer = window.setTimeout(() => {
        if (ready || !status)
            return;
        status.replaceChildren();
        const retry = document.createElement('button');
        retry.type = 'button';
        retry.textContent = 'Reload tour';
        retry.addEventListener('click', () => location.reload());
        status.append(retry);
        container.dataset.tourState = 'recovery';
        window.clearInterval(queryTimer);
    }, 30_000);
    function handleMessage(event) {
        if (event.origin !== origin || event.source !== frame.contentWindow)
            return;
        const payload = event.data;
        if (!payload)
            return;
        if (payload.type === 'raindigit-tour-fullscreen-fallback') {
            if (payload.action === 'enter' || payload.action === 'exit')
                setFullscreen(payload.action === 'enter');
            return;
        }
        if (payload.version !== 1 || payload.slug !== slug)
            return;
        if (payload.type !== 'raindigit-tour-ready')
            return;
        ready = true;
        container.dataset.tourState = 'ready';
        if (status)
            status.hidden = true;
        window.clearInterval(queryTimer);
        window.clearTimeout(recoveryTimer);
        container.dispatchEvent(new CustomEvent('raindigit:embed-ready', {
            detail: { slug, packageVersion: version, url: packageUrl.href }
        }));
    }
    window.addEventListener('message', handleMessage);
    window.addEventListener('keydown', (event) => {
        if (event.key === 'Escape')
            setFullscreen(false);
    });
    frame.addEventListener('load', queryReady);
    frame.src = packageUrl.href;
    container.append(frame);
})();
