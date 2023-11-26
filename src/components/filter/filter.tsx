import './filter.scss';

export function Filter() {
  return (
    <div className="filter-button">
      <label htmlFor="filter">Filter by: </label>
      <select
        // onChange={}
        name="filter"
        id="filter"
        // value={}
      >
        <option value="">All</option>
        <option value="friends">Friends</option>
        <option value="opps">Opps</option>
      </select>
    </div>
  );
}
