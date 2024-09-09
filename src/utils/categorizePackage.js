function categorizePackage(width, height, length, mass) {
    const inputs = { width, height, length, mass };
    for (const [key, value] of Object.entries(inputs)) {
        if (typeof value !== "number" || value <= 0) {
            throw new Error(`${key} must be a positive number.`);
        }
    }
    if (
        typeof width !== "number" ||
        typeof height !== "number" ||
        typeof length !== "number" ||
        typeof mass !== "number"
    ) {
        throw new Error("All inputs must be numbers.");
    }

    const volume = width * height * length;

    const isBulky = volume >= 1000000 || width >= 150 || height >= 150 || length >= 150;

    const isHeavy = mass >= 20;

    if (isBulky && isHeavy) {
        return "REJECTED";
    } else if (isBulky || isHeavy) {
        return "SPECIAL";
    } else {
        return "STANDARD";
    }
}

module.exports = categorizePackage;
