/*
Copyright (C) 2017-2021 Netsyms Technologies.

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
 the Software, and to permit persons to whom the Software is furnished to do so,
 subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
 FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
NETSYMS TECHNOLOGIES BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

Except as contained in this notice, the name and other identifying marks of
Netsyms Technologies shall not be used in advertising or otherwise to promote
the sale, use or other dealings in this Software without prior written
authorization from Netsyms Technologies.
*/

<template>
    <div class="captcheck_container"></div>
</template>

<script>
import { destination } from '../destination.js';
export default {
    methods: {
        makeCaptcha() {

            let api_url = "http://" + destination.ip + "/api.php";

            function chooseAnswer(idp, ans) {
                let box = document.getElementById("captcheck_" + idp + "_answer_" + ans);
                box.checked = true;
                return false;
            }

            function switchMode(idp) {
                let switch_label = document.getElementById("captcheck_" + idp + "_alt_question_button");
                let img_q = document.getElementById("captcheck_" + idp + "_question_image");
                let acc_q = document.getElementById("captcheck_" + idp + "_question_access");
                let img_a = document.getElementById("captcheck_" + idp + "_answer_images");
                let acc_a = document.getElementById("captcheck_" + idp + "_answer_access");
                if (switch_label.innerHTML == "&gt; Text mode") {
                    switch_label.innerHTML = "&gt; Image mode";
                    img_q.style.display = "none";
                    acc_q.style.display = "initial";
                    img_a.style.display = "none";
                    acc_a.style.display = "initial";
                    acc_a.innerHTML = "<input type='text' name='captcheck_selected_answer' aria-label='Type your answer here.' autocomplete='off' autofill='off'/>";
                } else {
                    switch_label.innerHTML = "&gt; Text mode";
                    img_q.style.display = "initial";
                    acc_q.style.display = "none";
                    img_a.style.display = "initial";
                    acc_a.style.display = "none";
                    acc_a.innerHTML = "";
                }
            }

            let nonce = "";
            /* Loop over all the CAPTCHA containers on the page, setting up a different CAPTCHA in each */
            Array.prototype.forEach.call(document.getElementsByClassName("captcheck_container"), function (container) {
                if (container.dataset.stylenonce) {
                    nonce = container.dataset.stylenonce;
                }
                let xhr = new XMLHttpRequest();
                xhr.open('GET', api_url + "?action=new", true);
                xhr.onreadystatechange = function () {
                    if (this.readyState == 4) {
                        let status = this.status;
                        let json = this.responseText;
                        /* Prevent rare bug where two CAPTCHAs appear in one container */
                        if (container.innerHTML.trim() != "") {
                            return;
                        }
                        /* Create captcha div */
                        let captcha = document.createElement("div");
                        captcha.setAttribute("class", "captcheck_box");
                        container.appendChild(captcha);

                        if (status == 200) {
                            let data = JSON.parse(json);
                            // ID prefix to use for this instance
                            let idp = data.id_prefix;
                            /* Create answer buttons */
                            let answers = "<div class='captcheck_answer_images' id='captcheck_" + idp + "_answer_images'>";
                            for (let i = 0, len = data.answers.length; i < len; i++) {
                                let src = api_url + "?action=img&s=" + data.session + "&c=" + data.answers[i];
                                answers += "<a class='captcheck_answer_label' href='' data-prefix='" + idp + "' data-answer='" + data.answers[i] + "' tabindex='0' aria-role='button'><input id='captcheck_" + idp + "_answer_" + data.answers[i] + "' type='radio' name='captcheck_selected_answer' value='" + data.answers[i] + "' data-prefix='" + idp + "' data-answer='" + data.answers[i] + "' /><img src='" + src + "' data-prefix='" + idp + "' data-answer='" + data.answers[i] + "'/></a>";
                            }
                            answers += "</div>";
                            let answer_div = document.createElement("div");
                            answer_div.innerHTML = answers + "<div class='captcheck_answer_access' id='captcheck_" + idp + "_answer_access'></div>";
                            /* Create question */
                            let question_div = document.createElement("div");
                            question_div.setAttribute("class", "captcheck_label_message");
                            question_div.setAttribute("id", "captcheck_" + idp + "_label_message")
                            question_div.innerHTML = "<span class='captcheck_question_image' id='captcheck_" + idp + "_question_image'>" + data.question_i + "</span><span class='captcheck_question_access' id='captcheck_" + idp + "_question_access'>" + data.question_a + "</span><a href='' class='captcheck_alt_question_button' data-prefix='" + idp + "' id='captcheck_" + idp + "_alt_question_button' aria-role='button' aria-label='Switch between image and text question' tabindex='0'>&gt; Text mode</a>";

                            /* Add question and answers */
                            captcha.appendChild(question_div);
                            captcha.appendChild(answer_div);

                            /* Add hidden session ID element */
                            let skey_input = document.createElement("span");
                            skey_input.innerHTML = "<input type='hidden' name='captcheck_session_code' value='" + data.session + "' />";
                            captcha.appendChild(skey_input);

                            let answer_buttons = document.querySelectorAll(".captcheck_answer_label[data-prefix=\"" + idp + "\"]");
                            for (let i = 0; i < answer_buttons.length; i++) {
                                answer_buttons[i].addEventListener("click", function (ev) {
                                    chooseAnswer(ev.target.getAttribute("data-prefix"), ev.target.getAttribute("data-answer"));
                                    ev.preventDefault();
                                });
                                answer_buttons[i].addEventListener('keydown', function (ev) {
                                    if (ev.key === "Enter" || ev.which === 13 || ev.keyCode === 13 || ev.key === ' ' || ev.which === 32 || ev.keyCode === 32) {
                                        chooseAnswer(ev.target.getAttribute("data-prefix"), ev.target.getAttribute("data-answer"));
                                        ev.preventDefault();
                                    }
                                });
                            }
                            document.querySelector(".captcheck_alt_question_button[data-prefix=\"" + idp + "\"]").addEventListener("click", function (ev) {
                                switchMode(ev.target.getAttribute("data-prefix"));
                                ev.preventDefault();
                            });
                            document.querySelector(".captcheck_alt_question_button[data-prefix=\"" + idp + "\"]").addEventListener('keydown', function (ev) {
                                if (ev.key === "Enter" || ev.which === 13 || ev.keyCode === 13 || ev.key === ' ' || ev.which === 32 || ev.keyCode === 32) {
                                    switchMode(ev.target.getAttribute("data-prefix"));
                                    ev.preventDefault();
                                }
                            });
                        } else {
                            /* Add error message */
                            captcha.innerHTML = "<span class='captcheck_error_message'>There was a problem loading the CAPTCHA.</span>";
                        }
                    }
                };
                xhr.send();
            });

            /* Add custom styles */
            let styles = document.createElement('style');
            if (nonce != "") {
                styles.setAttribute("nonce", nonce);
            }
            /* Remove newlines/comments from captcheck.css and put it here */
            styles.innerHTML = ".captcheck_box{font-family:Ubuntu,Arial,sans-serif;color:black;border:1px solid #e0e0e0;border-radius:3px;display:inline-block;padding:3px;margin:5px 2px 5px 1px;background-color:#f5f5f5;text-decoration:none}.captcheck_label_message,.captcheck_label_message b{color:black;font-family:Ubuntu,Roboto,Arial,sans-serif}.captcheck_answer_label{border:0}.captcheck_answer_label>input{visibility:hidden;position:absolute}.captcheck_answer_label>input+img{cursor:pointer;border:2px solid transparent;border-radius:3px;min-width:32px;width:18%;max-width:64px}.captcheck_answer_label>input:checked+img{cursor:pointer;border:2px solid #424242;border-radius:3px}.captcheck_error_message{color:red}.captcheck_question_image{display:initial}.captcheck_question_access{display:none}.captcheck_alt_question_button{float:right;font-size:80%;cursor:pointer;color:inherit;text-decoration:inherit;border:0}.captcheck_answer_images{display:initial}.captcheck_answer_access{display:none}";
            document.body.appendChild(styles);
        }
    },
    mounted() {
        this.makeCaptcha()
    }
}
</script>
