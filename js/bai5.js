function inSo() {
    let n = document.getElementById("n").value * 1;
    let soNguyenTo = "";
    if (n < 2) {
        return (n + " không phải là số nguyên tố");
    } else {
        for (let i = 1; i <= n; i++) {
            let count = 0;
            for (let j = 2; j < Math.sqrt(i); j++) {
                if (i % j === 0) {
                    count++;
                }
            }
            if (count === 0 && i > 1) {
                console.log(i);
                soNguyenTo = i + " ";
            }
            document.getElementById("inSo").innerHTML = soNguyenTo;
        }
    }
    document.getElementById("inSo").className = "bg-success card-footer text-white"
}