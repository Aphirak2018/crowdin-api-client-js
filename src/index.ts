import { ClientConfig, Credentials } from './core';
import { SourceFiles } from './sourceFiles';
import { Glossaries } from './glossaries';
import { Languages } from './languages';
import { Translations } from './translations';
import { TranslationStatus } from './translationStatus';
import { ProjectsGroups } from './projectsGroups';
import { Reports } from './reports';
import { Screenshots } from './screenshots';
import { SourceStrings } from './sourceStrings';
import { UploadStorage } from './uploadStorage';
import { Tasks } from './tasks';
import { TranslationMemory } from './translationMemory';
import { Webhooks } from './webhooks';
import { MachineTranslation } from './machineTranslation';
import { StringTranslations } from './stringTranslations';
import { Workflows } from './workflows';
import { Users } from './users';
import { Vendors } from './vendors';

export * from './core';
export * from './sourceFiles';
export * from './glossaries';
export * from './languages';
export * from './translations';
export * from './translationStatus';
export * from './projectsGroups';
export * from './reports';
export * from './screenshots';
export * from './sourceStrings';
export * from './uploadStorage';
export * from './tasks';
export * from './translationMemory';
export * from './webhooks';
export * from './machineTranslation';
export * from './stringTranslations';
export * from './workflows';
export * from './users';
export * from './vendors';

export default class Client {
    readonly sourceFilesApi: SourceFiles;
    readonly glossariesApi: Glossaries;
    readonly languagesApi: Languages;
    readonly translationsApi: Translations;
    readonly translationStatusApi: TranslationStatus;
    readonly projectsGroupsApi: ProjectsGroups;
    readonly reportsApi: Reports;
    readonly screenshotsApi: Screenshots;
    readonly sourceStringsApi: SourceStrings;
    readonly uploadStorageApi: UploadStorage;
    readonly tasksApi: Tasks;
    readonly translationMemoryApi: TranslationMemory;
    readonly webhooksApi: Webhooks;
    readonly machineTranslationApi: MachineTranslation;
    readonly stringTranslationsApi: StringTranslations;
    readonly workflowsApi: Workflows;
    readonly usersApi: Users;
    readonly vendorsApi: Vendors;

    constructor(credentials: Credentials, config?: ClientConfig) {
        this.sourceFilesApi = new SourceFiles(credentials, config);
        this.glossariesApi = new Glossaries(credentials, config);
        this.languagesApi = new Languages(credentials, config);
        this.translationsApi = new Translations(credentials, config);
        this.translationStatusApi = new TranslationStatus(credentials, config);
        this.projectsGroupsApi = new ProjectsGroups(credentials, config);
        this.reportsApi = new Reports(credentials, config);
        this.screenshotsApi = new Screenshots(credentials, config);
        this.sourceStringsApi = new SourceStrings(credentials, config);
        this.uploadStorageApi = new UploadStorage(credentials, config);
        this.tasksApi = new Tasks(credentials, config);
        this.translationMemoryApi = new TranslationMemory(credentials, config);
        this.webhooksApi = new Webhooks(credentials, config);
        this.machineTranslationApi = new MachineTranslation(credentials, config);
        this.stringTranslationsApi = new StringTranslations(credentials, config);
        this.workflowsApi = new Workflows(credentials, config);
        this.usersApi = new Users(credentials, config);
        this.vendorsApi = new Vendors(credentials, config);
    }
}
