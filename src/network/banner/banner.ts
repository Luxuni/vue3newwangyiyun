import request from "@/network/require";

function getBanner(type: number) {
    return request({
        url: "/banner",
        params: {
            type: type
        }
    });
}

export {getBanner};
