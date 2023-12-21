import React, { useEffect } from "react";
import { useRouter } from "next/router";

const Custom404 = () => {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 2500);
  }, []);
  return (
    <section class="page_404">
      <div class="container mx-auto">
      <div class="col-sm-10 col-sm-offset-1  text-center">
        <div class="row">	
          <div class="col-sm-12 ">
              <div class="four_zero_four_bg">
                <h1 class="text-center ">404</h1>
              </div>
              <div class="contant_box_404">
                <h3 class="h2">
                Look like you're lost
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Custom404;