import { CrowdinApi, ResponseList, ResponseObject, PatchRequest } from '../core';

export class SourceStrings extends CrowdinApi {
    /**
     * @param projectId project identifier
     * @param fileId file identifier
     * @param limit maximum number of items to retrieve (default 25)
     * @param offset starting offset in the collection (default 0)
     */
    listProjectStrings(
        projectId: number,
        fileId?: number,
        limit?: number,
        offset?: number,
    ): Promise<ResponseList<SourceStringsModel.String>> {
        let url = `${this.url}/projects/${projectId}/strings`;
        url = this.addQueryParam(url, 'fileId', fileId);
        url = this.addQueryParam(url, 'limit', limit);
        url = this.addQueryParam(url, 'offset', offset);
        return this.get(url, this.defaultConfig());
    }

    /**
     * @param projectId project identifier
     * @param request request body
     */
    addString(
        projectId: number,
        request: SourceStringsModel.CreateStringRequest,
    ): Promise<ResponseObject<SourceStringsModel.String>> {
        const url = `${this.url}/projects/${projectId}/strings`;
        return this.post(url, request, this.defaultConfig());
    }

    /**
     * @param projectId project identifier
     * @param stringId string identifier
     */
    getString(projectId: number, stringId: number): Promise<ResponseObject<SourceStringsModel.String>> {
        const url = `${this.url}/projects/${projectId}/strings/${stringId}`;
        return this.get(url, this.defaultConfig());
    }

    /**
     * @param projectId project identifier
     * @param stringId string identifier
     */
    deleteString(projectId: number, stringId: number): Promise<void> {
        const url = `${this.url}/projects/${projectId}/strings/${stringId}`;
        return this.delete(url, this.defaultConfig());
    }

    /**
     * @param projectId project identifier
     * @param stringId string identifier
     * @param request request body
     */
    editString(
        projectId: number,
        stringId: number,
        request: PatchRequest[],
    ): Promise<ResponseObject<SourceStringsModel.String>> {
        const url = `${this.url}/projects/${projectId}/strings/${stringId}`;
        return this.patch(url, request, this.defaultConfig());
    }
}

export namespace SourceStringsModel {
    export interface String {
        id: number;
        projectId: number;
        fileId: number;
        identifier: string;
        text: string;
        type: Type;
        context: string;
        maxLength: number;
        isHidden: boolean;
        revision: number;
        hasPlurals: boolean;
        plurals: any;
        isIcu: boolean;
        createdAt: string;
        updatedAt: string;
    }

    export interface CreateStringRequest {
        identifier: string;
        fileId?: number;
        text: string;
        context?: string;
        isHidden?: boolean;
        maxLength?: number;
    }

    export enum Type {
        TEXT = 0,
        ASSET = 1,
        ICU = 2,
    }
}
