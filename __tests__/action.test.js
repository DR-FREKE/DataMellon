import * as actions from "../src/store/actions/action.creator";

// test asynchronous redux
describe("test async redux actions", () => {
  let mocDispatcher = jest.fn();
  // custom mock function
  const getGraphData = (input_data, data) => {
    if (input_data != null && data.length > 0) {
      return { input_data, data };
    } else {
      throw new Error("an error occurred");
    }
  };

  it("should run test that it dispatches LOADING", async () => {
    await actions.postAction()(mocDispatcher);
    expect(mocDispatcher.mock.calls[0]).toMatchSnapshot();
  });

  it("should test that it dispatches SEND_DATA", async () => {
    const data = [{ sales: 10, profit: 2, OrderDate: "02/11/2017" }];
    await actions.postAction(
      "SEND_DATA",
      { angular_test: "angular-developer" },
      getGraphData
    )(mocDispatcher);

    expect(mocDispatcher.mock.calls[1]).toMatchSnapshot();
  });

  it("should test for ERROR_OCCURED", async () => {
    await actions.postAction("", {}, getGraphData)(mocDispatcher);

    expect(mocDispatcher.mock.calls[1]).toMatchSnapshot();
  });
});

describe("test for filteration", () => {
  let mocDispatcher = jest.fn();

  const filterGraphData = (filter_data, data) => {
    if (filter_data != null && data.length > 0) {
      return { filter_data, data };
    } else {
      throw new Error("error occured");
    }
  };

  it("should test for loading", async () => {
    await actions.filterAction()(mocDispatcher);
    expect(mocDispatcher.mock.calls[0]).toMatchSnapshot();
  });

  it("should test for FILTER_DATA", async () => {
    const data = [{ sales: 10, profit: 2, OrderDate: "02/11/2017" }];
    await actions.filterAction(
      { profit: 2, year: "2017", sales: 5 },
      data,
      filterGraphData
    )(mocDispatcher);

    expect(mocDispatcher.mock.calls[1]).toMatchSnapshot();
  });
});
