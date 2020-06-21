import { User } from './user.model';

export class Task {
    uid: string;
    name: string;
    assignee: Array<User>;
    status: string;
    category: string;
    startDate: Date;
    endDate: Date;
}
