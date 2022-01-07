import { AxiosResponse } from 'axios';

import { UserInterface } from 'types/user';

export type UserResponse = Promise<AxiosResponse<UserInterface>>;
