function formatHexadecimal(input) {
    // Ensure input is a 16-character hexadecimal string
    if (input.length !== 16) {
        throw new Error('Input must be a 16-character hexadecimal string.');
    }

    // Convert input hexadecimal string to a byte array
    let bytes = [];
    for (let i = 0; i < input.length; i += 2) {
        bytes.push(input.substring(i, i + 2));
    }

    // Rearrange bytes according to desired format
    // Example rearrangement: swap positions for demonstration
    // Adjust this logic according to the required output format
    let rearrangedBytes = [
        bytes[2], bytes[3], bytes[0], bytes[1],
        bytes[4], bytes[5], bytes[6], bytes[7]
    ];

    // Convert rearranged bytes back to a hexadecimal string
    let formattedHex = rearrangedBytes.join('');

    // Output the result
    document.getElementById('result').textContent = `Formatted Command: ${formattedHex.toUpperCase()}`;
}
