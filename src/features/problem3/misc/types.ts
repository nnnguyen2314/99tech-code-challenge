export type IssueRow = {
    type: 'error' | 'warning';
    issue: string;
    explanation: string;
};

export type IssueTable = {
    title: string;
    subtitle: string;
    rows: IssueRow[];
};
