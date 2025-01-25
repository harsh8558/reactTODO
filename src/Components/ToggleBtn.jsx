import { CiLight } from "react-icons/ci";
import useTheme, { ThemeContext } from "../Context/theme";

const ToggleBtn = ()=>{
  const {themeMode,darkTheme,lightTheme} = useTheme(ThemeContext)
  function handleChange(e){
    const ThemeChanger = e.currentTarget.checked;
    if(ThemeChanger) return darkTheme()
      return lightTheme()
  }
  return(<>
    <label className="relative inline-flex items-center cursor-pointer">
      <input
        type="checkbox"
        checked={themeMode==="dark"}
        onChange={handleChange}
        className="sr-only peer"
      />
      <div className="w-12 h-12 rounded-md bg-gray-100 dark:peer-checked:bg-black peer-focus:ring-2  peer-focus:ring-blue-300 transition">
        <CiLight className="text-5xl dark:text-blue-100"/>
      </div>
    </label>
  </>)
}
export default ToggleBtn