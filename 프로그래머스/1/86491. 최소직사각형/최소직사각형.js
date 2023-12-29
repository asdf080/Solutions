function solution(sizes) {
    let w = 0, h = 0;

    sizes.forEach(a => a.sort((a,b) => b-a))
    sizes.forEach(a => w = Math.max(w, a[0]))
    sizes.forEach(a => h = Math.max(h, a[1]))
    return w*h;
}