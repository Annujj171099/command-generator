function generateCommand() {
    let swap_command = parseInt(document.getElementById('swap_command').value, 10);
    let rider_id = parseInt(document.getElementById('rider_id').value, 10);
    let battery_id = parseInt(document.getElementById('battery_id').value, 10);

    // Initialize a BigInt for the command
    let command = 0n;

    // Combine swap_command (1 bit) and the first 7 bits of rider_id
    command = BigInt((swap_command & 0x01) | ((rider_id & 0x7F) << 1));

    // Use the remaining 25 bits of rider_id
    command |= BigInt((rider_id >> 7) & 0xFFFFFF) << 8n;

    // Use all 4 bytes of battery_id
    command |= BigInt(battery_id) << 32n;

    // Convert to a hexadecimal string and ensure it's 16 characters (8 bytes) long
    let hexCommand = command.toString(16).padStart(16, '0').toUpperCase();

    // Ensure input is a 16-character hexadecimal string
    if (hexCommand.length !== 16) {
        throw new Error('Input must be a 16-character hexadecimal string.');
    }

    // Convert input hexadecimal string to a byte array
    let bytes = [];
    for (let i = 0; i < hexCommand.length; i += 2) {
        bytes.push(hexCommand.substring(i, i + 2));
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
    
    document.getElementById('result').textContent = `Command: ${formattedHex.toLowerCase()}`;
}
