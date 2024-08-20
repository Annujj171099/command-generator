function generateCommand() {
    const swap_command = 1; // Set swap_command as a constant value of 1
    let rider_id = parseInt(document.getElementById('rider_id').value, 10);
    let battery_id = parseInt(document.getElementById('battery_id').value, 10);

    let command = 0n;

    // Combine swap_command (1 bit) and the first 7 bits of rider_id
    command = BigInt((swap_command & 0x01) | ((rider_id & 0x7F) << 1));

    // Use the remaining 25 bits of rider_id
    command |= BigInt((rider_id >> 7) & 0xFFFFFF) << 8n;

    // Use all 4 bytes of battery_id
    command |= BigInt(battery_id) << 32n;

    document.getElementById('result').textContent = `Command: 0x${command.toString(16).toUpperCase()}`;
}
