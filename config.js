/**
 * Basic Configuration.
 * - 기본 환경 설정으로, 각 AWS Profile 별로 적용할 serverless custom 환경 설정.
 * - 각 profile별로 주요 변수(특히 환결 설정 파일)를 설정함.
 * 
 * 참고: https://velog.io/@doondoony/Serverless-Framework-serverless.yml-%EC%84%A4%EC%A0%95-%EC%A0%95%EB%B3%B4-%EC%88%A8%EA%B8%B0%EA%B8%B0-2hjmsx7nal
 * 
 * @param {*} serverless        see `node_modules/serverless/lib/Serverless.js`
 * @author Steve Jung <steve@lemoncloud.io>
 * @date   2019.JAN.10
 */
const CONF = (serverless) => {
    // console.log('serverless=', serverless);
    serverless.cli.consoleLog('loading config settings...');
    return {
        "lemon": {
            name: "lemon-app",
            runtime: "python3.6",
            region: "ap-northeast-2",
            env: "lemon.yml",                                   // environment file
            securityGroupIds: ["sg-ea6afa81"],                  // securityGroupIds
            subnetIds: ["subnet-24b60e4c","subnet-a252baee"],   // subnetIds
        },
        "none": {
            name: "none-app",
            runtime: "python3.6",
            region: "ap-northeast-2",
            env: "none.yml",                                    // environment file
            securityGroupIds: undefined,                        // securityGroupIds
            subnetIds: undefined,                               // subnetIds
        },
    };
}

//! export
exports = module.exports = {CONF}
