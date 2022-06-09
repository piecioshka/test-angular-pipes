import { OnlyFirstPipe } from "./only-first.pipe";

describe("OnlyFirstPipe", () => {
  let pipe: OnlyFirstPipe = null;

  beforeEach(() => {
    pipe = new OnlyFirstPipe();
  });

  it("create an instance", () => {
    expect(pipe).toBeTruthy();
  });

  it("should reduce first element from the list", () => {
    const collection = ["foo", "bar", "baz"];
    const output = pipe.transform(collection);
    expect(output).toEqual(["foo"]);
  });
});
