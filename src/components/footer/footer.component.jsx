import './footer.styles.scss';
import { Outlet } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="app-container">
      <Outlet />
      <footer className="footer-container">
        <div className="footer">
          <div className="footer-item">
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKoAAAAdCAYAAAA6ufdPAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAUCSURBVHgB7ZpNjts2FMf/mmn32g5QYDi7oF1UCbqPeoJOTzDKCZw5gd0T2D2BlRNkbiBnX2RcoAi6M7uapd1N0UViRS8iR0+0PixZkp2EP4A2RYrkE/nI90gJsFgsFovFYrFYLBaLxfJl4uD0EepfwjI0XhJGKr5Jwi2aQeWlKtsJkyTEDcIcwzBlbd7gMHzkn8GHpQ4fWX+t0IzXqtwaHfT1GU4XNwkv2fWvOE1oxaFBuU/CNSyEQNYX5ji24hu041/0D5kLicz0r3Ga0ID4Ku7CQmxU0P2xwAAI5E3mCpnyDNH2DKlrcqgS+OjH9EeszgBfFj7am36BbOwOZp8VNTKuX2C4jY1EB2bDchQkOhy7Oh91jPzq+Rt2l3HaWEUqeEaey/KimnKeitPMvVT3TNk9ffp/HmvntUoLmDz3Sl7Byuhn4888YvVMjDao7FTVV1bnPvLMD5CZM2b3rlQdAapxjXJVbfDx5WPns/SpqtPslxEaWG0fuya/iBXKzakw6igrR4Ku2fWluqdLs+qj3PTzvJXRrtkHbsmzVZ2MjIznM8O4QlZqk59+RAfIrLmvkCUqkWNdUW6NXcVaoXjsAkO2VYXcj3WWrah0w5xdk2P8M/qDTMSpbEQEMiWWBXncnJn5egNIQW84faS+mmuU42eLE5T7zAL1JlRgf5kDZFaAZAiRt5KvUIzLysmCvDGaI1B+Tk7pEWr0gpSUa3dVR3WxoupZaW6c+CoR4DB87LeiUrhH1oEC+ZVkZdRbJ2Nk1Ms7PkT9SsbzZ6yNtjJPWPqMpQvsuit+QRvcovBnM09l9llRdZ1eiXyVumdWNEc1XShqbplnHEtRTV/7GuUDUiWjKGhTsOAh7xK4JfJMUP88+8r8ErvjK1CMb9wravI5fHwDlh7U1EmELP+OEsxdPxUas2uJdAPVN7/jgJOEh2ffB3Cc546Dzftt/Od3b9+FaA+Zw6WRJlm8iYsijOuo5n5StkVBeohqmsgcIr9ZCVRYIDX7IYqR2B0jicNYlNRB6Tcq/iP9mIpqzq6hjqKWaMnDsx/mcNIZGyfz7zzR1kRxLy/evms7wTZ7pg2FRP0YNJFZ7zdorH2W7qtwiWEWJ0Lum843U7SS+uy66CiqDnO18dAj6Upa4BI4zuThpyc+jo+pLE+TcFURWk/YhkikykryvEJeMSbITl365rok/RcW/9SHWlEF8n6QRLs3Cs9ZXJ+P9cY2jv2yvHjr9DpJSjAnKikeV1YyuZKFjUpz0fFXRjUESMd8qeJPkVfWKwxD0WmBh7xP+4Z+tKKaGyaB4rOtog3WGxYnRz1S+Sv0/KrVcZxjmmTNPyxOSkfPTpsXrbTcjAbIDtd1H+k+u8EwBMgO46fq2jxgH7JfJ0j7QctknozM6KftRymcEPlO9lmcf5jQOc7Z2V3imI520uNEgbfxHYYhRPb8AtlqQP8zFSh9xO4RRh3UR0N9G8xlLTr6oX4bygXR+iFQfKrzuEfq4jO/BdJP8GRJem9c/PHXIllWc44/KWl8vr29WP4tMQwL7G4+9NdDGlKIoo3pRpUn0xtiGMg3vS2RhU5fXmA4aEKU6Q7JGeqErmexwPD+Fh68J2J7/q13Fn9w/9/+d3e1lMdwCfSbG4nqXTq/z1TooTmGLAEy13GB7I0nf+t1Ci6d5SsnQPHbuEpO+Qt/i+URq6iWz4Iudv0WSxP0BpLY+3ThI5aoO0ck9MgFAAAAAElFTkSuQmCC"
              alt="brand logo"
            />
          </div>
          <div className="footer-item">
            <p>HNG Internship 9 Frontend Task</p>
          </div>
          <div className="footer-item">
            <img
              src="https://ingressive.org/wp-content/uploads/2020/05/I4G-Logo-Color-Cropped.png"
              alt="Ingressive for Good Logo"
              className="ing-logo"
            />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
