export const Loading = () => (
    <>
      <div className="spinner">
        <div className="bounce1" />
        <div className="bounce2" />
        <div className="bounce3" />
      </div>

      <div className="spinner mod-vertical-margin">
        <div className="bounce1" />
        <div className="bounce2" />
        <div className="bounce3" />
      </div>

      <div className="loading-prompt">
        <div>Currently loading. Please wait.</div>
        <div className="spinner">
          <div className="bounce1" />
          <div className="bounce2" />
          <div className="bounce3" />
        </div>
      </div>
  </>
);
export default Loading;
