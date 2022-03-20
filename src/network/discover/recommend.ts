import request from "@/network/require";

function getBanner(type: number) {
    return request({
        url: "/banner",
        params: {
            type: type
        }
    });
}

function getPersonalized(limit: number, cookie?: string) {
    return request({
        url: "/personalized",
        params: {
            limit: limit,
            cookie: cookie
        }
    });
}

export {getBanner, getPersonalized};
