function generateId() {
    return "00000000000000000000000000000000".replace(/0/g, function() {
      return (~~(Math.random() * 16)).toString(16);
    });
}
