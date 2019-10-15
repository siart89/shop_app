export const priceCompare = (arr, price) => {
    let compare = false;
    arr.forEach(elem => {
        if (elem.check && elem.value) {
            if (elem.value.min <= price && price <= elem.value.max) {
                compare = true;
                return;
            } else return;
        }
    });
    return compare;
};