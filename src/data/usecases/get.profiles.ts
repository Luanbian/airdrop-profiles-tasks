import { fetchEventSource } from '@microsoft/fetch-event-source';

export default async function getProfiles(): Promise<unknown> {
    const ctrl = new AbortController();
    const url = 'http://localhost:3000/profile/search';
    const headers = { Accept: 'text/event-stream' };

    return new Promise((resolve, reject) => {
        try {
            fetchEventSource(url, {
                method: 'GET',
                headers,
                signal: ctrl.signal,
                onmessage: (message) => {
                    try {
                        const data = JSON.parse(message.data);
                        resolve(data);
                    } catch (error) {
                        ctrl.abort();
                        reject(error);
                    }
                },
                onclose: () => {
                    reject(new Error('Connection closed by the server'));
                },
            });
        } catch (error) {
            reject(error);
        }
    });
}
