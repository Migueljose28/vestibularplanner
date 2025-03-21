import { randomUUID } from "node:crypto";

export class DatabaseMemory {
    #videos = new Map();

    list(search) {
        return Array.from(this.#videos.entries())
            .map((videoArray) => {
                const [id, data] = videoArray;
                return {
                    id,
                    ...data,
                };
            })
            .filter((video) => {
                if (search) {
                    return video.title.includes(search);
                }
                return true;
            });
    }

    create(video) {
        const videoId = randomUUID();
        this.#videos.set(videoId, video);
    }

    getById(id) {
        return this.#videos.get(id) || null; 
    }

    update(id, video) {
        if (this.#videos.has(id)) {
            this.#videos.set(id, video);
            return true;
        }
        return false; // Retorna falso se o ID não existir
    }

    delete(id) {
        this.#videos.delete(id);
    }
}
