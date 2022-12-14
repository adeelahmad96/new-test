const { deterministicPartitionKey } = require("./dpk");

describe("deterministicPartitionKey", () => {
  it("Returns the literal '0' when given no input", () => {
    const trivialKey = deterministicPartitionKey();
    expect(trivialKey).toBe("0");
  });
  it("Returns the literal '0' when given event input without partitionKey", () => {
    const trivialKey = deterministicPartitionKey({ event: 'my event'});
    expect(trivialKey).toBe("0");
  });
  it("Returns the literal '0' when given event input with partitionKey", () => {
    const trivialKey = deterministicPartitionKey({ partitionKey: 'Partition Key'});
    expect(trivialKey).toBe("0");
  });
  it("Returns the hash when given event input with partitionKey not string", () => {
    const trivialKey = deterministicPartitionKey({ partitionKey: {key: `Partition KeyLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`}});
    expect(trivialKey).toBeDefined();
  });
});
