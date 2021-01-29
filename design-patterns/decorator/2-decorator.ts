function readonly(target: any, name: any, descriptor: any) {
    descriptor.writable = false;
    return descriptor;
}

class Job {
    @readonly
    title() { return 'CEO'}
}