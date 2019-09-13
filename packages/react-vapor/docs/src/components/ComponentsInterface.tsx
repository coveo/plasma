export interface IComponent {
    path: string;
    name: string;
    code: string;
    component: any;
    tabs: TabConfig[];
}

export interface TabConfig {
    tabName: string;
    markdown: string;
    order: number;
}
