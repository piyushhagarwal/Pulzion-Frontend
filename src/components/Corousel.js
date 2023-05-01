import React from "react";
import "../css/corousel.css";

export default function Corousel() {
  return (
    <div>
      <div
        id="carouselExampleCaptions"
        class="carousel slide  "
        data-bs-ride="false"
      >
        <div class="carousel-indicators ">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div class="carousel-inner ">
          <div class="carousel-item active">
            <img
              src="data:image/jpeg;base64,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"
              class="d-block w-100"
              alt="image1"
            />
            <div class="carousel-caption  d-md-block">
              <h3>
                "The stock market is a device for transferring money from the
                impatient to the patient."
              </h3>
              <p>Warren Buffett</p>
            </div>
          </div>
          <div class="carousel-item">
            <img
              src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxIQEBUQExMVFhIVEhURFxgVExEXFhUVFxUWGBUVFRMaHSggGBolGxMXIjEiJSkrLi8uFx8zODMtNygtLisBCgoKDg0OGxAQGi4dICUyKzctLTctMi8vNy0tNzItLS0xNzItLS0tLS0tLTIuLS0tNy0tLzA1NSsuMS0tLSs1L//AABEIAIcBdQMBIgACEQEDEQH/xAAbAAEAAwEBAQEAAAAAAAAAAAAAAgMEAQUHBv/EAD0QAAIBAgMDBwkHBAMBAAAAAAABAgMREiExBEFRImFxgZGhsQUTFDNScpLB0SMyQmKisvBTgrPSk6PCQ//EABgBAQEBAQEAAAAAAAAAAAAAAAABAwIE/8QAJhEBAQACAQQABQUAAAAAAAAAAAECESEDEjFBBBNRYfAyccHh8f/aAAwDAQACEQMRAD8A+qAAryAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAT2eg6md7RTtfK7e9Rvl1gk2gDathp8JfHP6lNfY3FXhdr2Xm/7Xv6H2h1cKoBxO6utDocgAAAAAAcb0Vm23bLob+QHQVutFZNpPhLkvseZ2NRPTle6nLwAmDkrrNxkl7krdbtkIyTzTuuYDoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAjUvZ210XS8kb3OUJwpxp3p2acrrkWXJVt97Hn1fuu2tm107j0dqrzSi4Qx4pJPlJYYvWXOStuhN3SyG0QlOVNSTnGzks8r6EI1Z+dcMFoKF1O6zd1ybdb7CdSmlicVFVGtWlm0uTierRmltbo04Os1jlJQeBNrE72tzWRzb9W+OMv6Zv7e/3Z6sbTmt2K660m+9s4dqu85v8ANb4Uo+MTh28d8gACAI4s7Zt8Em32LcWeZqf05dtP/YGqicVPFOCTs8Tzz9iXBp94jK6TWjVyez+sh7z/AGTCzyUYVFVkk09d64U9zXRvNPm6r1lZdPyST/Udo+ul/d4UjTUqKKu3ZEbSMO0bNNQk8f4Zf1OD4za7jFK8YtyjysckpKyvy3dS3S38HwW89Db6WOGJTaSjKWWklb+dpCcvsZrhKW576j379A5yxUAArIAAAAAARlJL+ZvmS3lkaM3pB9eFdzdwaRB2VKa1hLqs+5Nspq1VFNvJpN8pOPiDSxsXN+z0Kdkkoy4vktt8Wyz0aHsR+GId/LeZcXPT9Gh7EfhiPRoexH4YhflvMOmjb6EYxxpKLTinZJXTaWfHW/UZFUT0d/dvJ9iDizV0mDqpTekJfpXc2mRmnH70XHnay65K6QTVdBw6AAAAAAAAAAAAAAAAANHk/Z7Wq45Z0owwt8lYUrtLjl3mc17I/svj/fJEsa9LKy3TP6XGVRwvy0sTVnkt2em9GjYcWKblUUk5K0UopwWeTtr18DJQx4pY1FK9otauP5uc1bHQhDHOKtKTvJ3eeFZZdb0OZu8vTe3GWfafS/5+Ripu6vxbl8Tb+ZMhRVoxX5V4Ezt4UJztubyu7borWT5kaKexYqeLLG7Si3+FXTStzrXpsW+TaeUpe1Jx6o3Vu3E+splSajKrf8Mms5YuZSz3WtbPRErXDCa3auVqKirWvNpvWUrJ2eW9vCrbrmiM3GLlPK3Kt7KS472ZsUJ/aVFZL7qnGSUU+eSs5Pu04tx22HIvFxVNLFaz5T1S7d29hfEZaStFJ62XgW7P6yHvP9kyEdM9Sez+sh7z/ZMrLHzGqj66X93hSNM4KSs9P52My0V9tLhyvCkbCN4prxSpSSyShJdzMspJ0JW9uX+RmvavVz9yXgzLP1Evel/kYTJnABWAAABx3ySV23ZLn+m/qOl/k+F5ylwSiul5vuUQsm7pp2bZlDPWW+XyXBcxcgdDeTTlgdIzmkrsKhPZ4S1hF9MYv5EPQ6fspdF14EZbQ92RW6suLIml3okPzf8AJU/2O+iQ4N9MpvxZRjfF9rOqtLiDUXR2Sms1CF+OFX7bFxRDaePcXplNAudAVh2vZLXlBc7itHxcVufiZU75nro8qrDDOUd18S6JZ+OLsDLPH24AAzAAAAAAAAAAAAAAsVScaCwQxtzkmsSVk5yvIrPQ2FWpw9xPrau/EladK6y3rbzYznKVSPJUUrRkmnK7Wd1fKzNewxw01Tc8U7PVrFJZ521KKmxShUTpQjhnNyqNt36Vnrmzctlgpqph5ajgv+W97W01ZzJXryuOtev5nHLzKL5K91eBMhTVlbhePwu3yJnbwNmxt+aVuMv3yuZ9kxyzw3gpOULysm3JvE8t18u3haGz1450pSUYqTbvJK6lZ4V0tu/N0m97XTX/ANIfFH6kbSyxKpRVSOGaXGyb16cjBtjldKUcNNNKNrNN7m7acy06TTU2+P4U5PoaXxP5XMdScpPFJ6aJaR6OL5/AJnlNaCWz+sh7z/ZMiS2f1kPef7JlZ4+Y00vWy/u8KRrTMUY3qyXveFI1UoWI3inylXUKcm98Wu1FMnehJrRyk/8AsZbt2yxkpTau1TlHmta+a36Fc/US96X+RhzWcAFYgAAGnya/vrnUupxS/wDLMx2lVwSUt1rS6OPU+5sLjdV6qOnFxFw9DpTtMG81uLgB54NsoJ62IOhHnIMoNPo65/51HVQjzgZUrm2lGysdiktCQAA4UDzdsf2r9yK67yfzR6FSooxcnos2eVdtuT1k7vm3JdSSXUGfUvGnQAGQAAAAAAAAAAAAAhUV1bjaPa7fM9LbKMpwcYT83LK0kk7Zrdl/GedNXWWu7me5m3ZU5SdXHJxlFLze6Elrbnuu8lbdG6u9+E9roTnDDGo4SuuUlfTXK+8hs9KnTqTSl9pP7Rxck2lpdR3LMs2bbIVMTi74JOEsmrSWupKVKCk6rSUlGzlvwrO1+BzqXmN+64y45cfntgrK05r81+2Kb72yqpJpZa6Lp5+YlixNyf4nfoWiXTZI6dvFfKNOOFW/je9skAAAAA4qqhOEnpie9L8EuLR05dppp5p3zV1o1musEWx2hY52kotqVnK8bO1OzzOeT66WJ525Ksm52au3yldJcpLVaPLjTTyk5YI53+7KUNcPD3eO8sdTO6pwT4yxTffbxOdc7bTq6xs+rRX22LhJK/3ZaK+5+zci5p0JNO/Kl/kZTWqzlFxapu6azg+HSzPJRUXm4yxaZuMk53SjLr0fZvK57l4AKzAAAAAEqFaVPJZx9l5W917ujwNcdvhvxJ88W++N0YgHUysbXt8N2J9EZLvlZFNXyjZNqDyV+VJLTouUHGgd9ejaq98F1Sl84jzdT249VP6yZjp7VOKSydsk3e9ufiS9Nnwj+r6h33xp8zP+o/gh9Dvmp/1O2EflYy+mz4R/V9R6bPhH9X1Id2K6vUqQjibhJXSthlF5tLXE+PAhHbuMPhkn42KK1aU7YrWTvZJ687bIlc3PnhtW20+LXTGf0OT2+C0UpPmi13uyMYB8yu1akpu8t2kVoue+985wAONgAAAAAAAAAAAAAAAAhJxd4uz370+lfxgAXR22S/BHqk112w/Mqq1JT+88tUkrLp530nAFuVvkAAQAKdo2mFNXnJJd76ES3XlccbldSbq4GfZttp1Moyu+GafYzQJZeYuWGWF1lNUABXIAABw6AAAAAAAAAAAAAAAARlJJXbslvYEgZaflClJ2Us+dNd7NQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA8PbbvaWmouGBYseUVT/E76p30azvbXQ9wz7XscKqtJaaNZNdZn1cLlNR6vg+vj0ep3ZTjWv7eK4qNSj5nOniVpZY3LLGqnB23aWzP0Rj2PydTpO8U8XFu76uBsJ0sLjOXfxvxGPWynb69+wAGrxAAAAAAAAAAAAAAAAAAAHn+WFeMU3hi52bs2llldLcegQqU1JOLV0wleBOlGimpYZVGrJJqUYJ/ib0cmtFu14Ht7E26cL64UUU/JVJO9m+ZvI3EhIAAqgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD//2Q=="
              class="d-block w-100"
              alt="image2"
            />
            <div class="carousel-caption  d-md-block">
              <h3>
                "Discipline, Time and Money are the keys to open the lock of
                success"
              </h3>
              <p>Norman Ralf Augustine</p>
            </div>
          </div>
          <div class="carousel-item">
            <img
              src="data:image/jpeg;base64,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"
              class="d-block w-100"
              alt="image3"
            />
            <div class="carousel-caption  d-md-block">
              <h3>
                "Beware of little expenses, a small leak will sink a great
                ship."
              </h3>
              <p>Benjamin Franklin</p>
            </div>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}
