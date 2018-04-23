import Mock from 'mockjs';

Mock.setup({
    timeout: '40-1200'
});

Mock.mock('http://server/test', {
    "server": {
        "name": "server_name"
    }
});