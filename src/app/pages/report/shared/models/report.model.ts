export interface Report {
  code: string;
  data: [{
    amount: string;
    created: string;
    rule: string;
    gatewayId: string;
    modified: string;
    paymentId: string;
    projectId: string;
    userIds: string[];
  }];
}
