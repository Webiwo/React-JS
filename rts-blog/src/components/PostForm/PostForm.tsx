import CreatableSelect from "react-select/creatable";
import { useRef } from "react";
import { Link } from "react-router";
import "./PostForm.css";

const PostForm = () => {
  const titleRef = useRef<HTMLInputElement>(null);
  const contentRef = useRef<HTMLTextAreaElement>(null);

  return (
    <div>
      <form>
        <label htmlFor="title">
          Title
          <input ref={titleRef} id="title" name="title" type="text" required />
        </label>
        <label htmlFor="tags">
          Tags
          <CreatableSelect id="tags" name="tags" isMulti />
        </label>
        <label htmlFor="content">
          Body
          <textarea
            ref={contentRef}
            id="content"
            name="content"
            rows={15}
            required
          />
        </label>
        <div className="buttons">
          <button type="submit" className="button btn-primary">
            Save
          </button>
          <Link to="..">
            <button className="button btn-secondary">Cancel</button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default PostForm;
