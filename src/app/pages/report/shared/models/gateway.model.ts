export interface Gateway {
  code: string;
  data: [{
    gatewayId: string;
    userIds: string[];
    rule: string;
    gatewaysIds: string[];
    structure: string;
    industry: string;
    website: string;
    description: string;
    image: string;
    name: string;
  }];
}
