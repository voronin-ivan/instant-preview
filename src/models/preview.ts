import { UploadedFileModel } from './file';

export interface PreviewModel {
    login?: string;
    photo?: File;
    activeStory?: boolean;
    postsCount?: string;
    followersCount?: string;
    followingCount?: string;
    name?: string;
    verifiedAcc?: boolean;
    business?: string;
    bio?: string;
    website?: string;
    address?: string;
    showPhone?: boolean;
    showEmail?: boolean;
    posts?: UploadedFileModel[];
    stories?: UploadedFileModel[];
}
