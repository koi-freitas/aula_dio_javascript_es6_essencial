function Myapp() {
    if(!MyApp.instance) {
        MyApp.instance = this;
    }

    return MyApp.instance;
}