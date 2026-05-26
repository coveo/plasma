export interface ComponentData {
    name: string;
    description: string;
    content: string;
}

export interface LlmsData {
    index: string;
    full: string;
    skill: string;
    components: ComponentData[];
}

export interface ToolError {
    text: string;
    isError: true;
}

export interface ToolSuccess {
    text: string;
    isError?: false;
}

export type ToolResult = ToolSuccess | ToolError;
