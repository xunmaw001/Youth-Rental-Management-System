const base = {
    get() {
        return {
            url : "http://localhost:8080/zufangguanlixitong/",
            name: "zufangguanlixitong",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/zufangguanlixitong/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "青年租房管理系统"
        } 
    }
}
export default base
