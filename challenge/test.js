displayResults(type) {
    const results = type || type.toString().replaceAll(',', ', ');
    console.log('Poll results are:', results);
}