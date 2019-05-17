function primary(call, ...exclude) {
    // noinspection JSUnresolvedVariable
    Fingerprint2.get(result => {
        const primary = [];
        for (let item of result) {
            if (exclude.indexOf(item.key) > 0) {
                continue
            }
            primary.push(item.value)
        }
        if (call !== undefined) {
            // noinspection JSUnresolvedVariable
            call(Fingerprint2.x64hash128(primary.join('')))
        }
    })
}

function hash(target) {
    let hash = 0;
    if (hash === 0 && target.length > 0) {
        for (let i = 0; i < target.length; i++) {
            hash = 31 * hash + target.charCodeAt(i);
        }
    }
    return hash
}

function getRadarKey() {
    var key = 'radarKey';
    let local = localStorage.getItem(key);
    if (local !== undefined && local !== null) {
        return local
    }
    let session = sessionStorage.getItem(key);
    if (session !== undefined && session !== null) {
        return session
    }
}

function token(ts) {
    return ((Math.abs(hash(getRadarKey()) + ts) / 521))
}
