import { HttpClient, RequestConfig } from '../..';

declare const fetch: Function;

export class FetchClient implements HttpClient {
    private maxConcurrentRequests = 15;
    private requestIntervalMs = 10;
    private pendingRequests = 0;

    get(url: string, config?: { headers: any }): Promise<any> {
        return this.request(url, 'GET', config);
    }
    delete(url: string, config?: { headers: any }): Promise<any> {
        return this.request(url, 'DELETE', config);
    }
    head(url: string, config?: { headers: any }): Promise<any> {
        return this.request(url, 'HEAD', config);
    }
    post(url: string, data?: any, config?: { headers: any }): Promise<any> {
        return this.request(url, 'POST', config, data);
    }
    put(url: string, data?: any, config?: { headers: any }): Promise<any> {
        return this.request(url, 'PUT', config, data);
    }
    patch(url: string, data?: any, config?: { headers: any }): Promise<any> {
        return this.request(url, 'PATCH', config, data);
    }

    private async request(url: string, method: string, config?: RequestConfig, data?: any): Promise<any> {
        let body = undefined;
        if (!!data) {
            if (typeof data === 'object') {
                body = JSON.stringify(data);
                config = config || { headers: {} };
                config.headers = config.headers || {};
                config.headers['Content-Type'] = 'application/json';
            } else {
                body = data;
            }
        }
        await this.waitInQueue();

        return fetch(url, {
            method: method,
            headers: !!config ? config.headers : {},
            mode: (config && config.mode) || 'no-cors',
            body: body,
        })
            .then(async (resp: any) => {
                const json = resp.json();
                if (resp.status >= 200 && resp.status < 300) {
                    return json;
                } else {
                    const err = await json;
                    throw err;
                }
            })
            .finally(() => (this.pendingRequests = Math.max(0, this.pendingRequests - 1)));
    }

    private waitInQueue(): any {
        // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
        return new Promise(resolve => {
            const interval = setInterval(() => {
                if (this.pendingRequests < this.maxConcurrentRequests) {
                    this.pendingRequests++;
                    clearInterval(interval);
                    resolve();
                }
            }, this.requestIntervalMs);
        });
    }
}
