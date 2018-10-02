
export interface YoutubeAPIRequest {
    king: string;
    etag: string;
    regionCode: string;
    items: Items[];
}

export interface Items {
    king: string;
    etag: string;
    id: number|Identifier;
    snippet: Snippet;
    contentDetails: ContentDetails;
}

interface Identifier {
    kind: string;
    videoId: string;
}

interface Snippet {
    publishedAt: string;
    channelId: string;
    title: string;
    description: string;
    channelTitle: string;
    type: string;
    groupId: string;
    assignable: boolean;
    thumbnails: Thumbnails[];
    liveBroadcastContent: boolean;
    resourceId: ResourceId;
}

interface ContentDetails {
    upload: Upload;
    bulletin: Bulletin;
    like: Like;
    playlistItem: PlaylistItem;
}

interface PlaylistItem {
    resourceId: ResourceId;
}

interface Like {
    resourceId: ResourceId;
}

interface Bulletin {
    resourceId: ResourceId;
}

interface ResourceId {
    kind: string;
    videoId: string;
}

interface Upload {
    videoId: string;
}

interface Thumbnails {
    [key: string]: Thumbnail;
}

interface Thumbnail {
    url: string;
    width: number;
    heigth: number;
}