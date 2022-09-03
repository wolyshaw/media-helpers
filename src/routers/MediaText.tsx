export default function MediaText() {
  return <div>
    <form className="media-form">
      <label className="media-label">
        <input className="hidden-file-input" type="file" />
        <span>请选择文件</span>
      </label>
    </form>
  </div>
}
