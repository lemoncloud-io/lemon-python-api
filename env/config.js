/**
 * Basic Configuration.
 * - 기본 환경 설정으로, 각 AWS Profile 별로 적용할 serverless custom 환경 설정.
 * - 각 profile별로 주요 변수(특히 환결 설정 파일)를 설정함.
 *
 * 참고: https://velog.io/@doondoony/Serverless-Framework-serverless.yml-%EC%84%A4%EC%A0%95-%EC%A0%95%EB%B3%B4-%EC%88%A8%EA%B8%B0%EA%B8%B0-2hjmsx7nal
 *
 *
 * @param {*} serverless        see `node_modules/serverless/lib/Serverless.js`
 *
 * @author      Steve Jung <steve@lemoncloud.io>
 * @date        2019-07-19 initial version
 * @date        2019-12-19 optimized for `lemon-core#v2`
 * @date        2022-05-24 optimized for `lemon-core#3.1.1` w/ serverless 3.16
 * @date        2022-08-17 optimized for `nodejs16`
 *
 * @copyright (C) lemoncloud.io 2019 - All Rights Reserved.
 */
const CONF = (serverless) => {
    // console.log('serverless=', serverless);
    console.log('Loading config settings...');
    return {
        lemon: {
            name: 'lemon-app',
            runtime: 'python3.8',                               // Powered by the V8 JavaScript Engine (used in Chromium)
            region: 'ap-northeast-2',
            env: 'lemon.yml',                                   // environment file
            securityGroupIds: ['sg-08770106971509def'],         // securityGroup : `lemon-services-api`
            subnetIds: ['subnet-0a53bcd7f3d256ce4','subnet-0ee4d1ca5eb964fc5'],   // subnetIds in VPC
            kmsKey: '*',                                        // KMS key-id
            kmsSignKey: undefined,
        },
        colover: {
            name: 'colover-app',
            runtime: 'python3.8',                               // Powered by the V8 JavaScript Engine (used in Chromium)
            region: 'ap-northeast-2',
            env: 'colover.yml',                                 // environment file
            securityGroupIds: ['sg-0c88604df5c54cdf5'],         // securityGroupIds `lemon-services-api`
            subnetIds: ['subnet-0175de29eed1a711d', 'subnet-06abf950037203c42'],  // subnetIds `private-2a/2b`
            kmsKey: '*',                                        // KMS key-id
            kmsSignKey: undefined,
        },
        none: {
            name: 'none-app',
            runtime: 'python3.8',                               // Powered by the V8 JavaScript Engine (used in Chromium)
            region: 'ap-northeast-2',
            env: 'none.yml',                                    // environment file
            securityGroupIds: undefined,                        // securityGroupIds in VPC
            subnetIds: undefined,                               // subnetIds in VPC
            kmsKey: undefined,                                  // KMS key-id
            kmsSignKey: undefined,
        },
    };
}

//! export
exports = module.exports = {CONF}
