package controller;

import com.google.gson.Gson;
import com.google.gson.JsonObject;
import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.ServletException;
import javax.servlet.annotation.MultipartConfig;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@MultipartConfig
@WebServlet(name = "SignUp", urlPatterns = {"/SignUp"})
public class SignUp extends HttpServlet {

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

        Gson gson = new Gson();

        //JsonObject requestJson = gson.fromJson(request.getReader(), JsonObject.class);
        System.out.println(request.getParameter("mobile"));
        System.out.println(request.getParameter("firstName"));
        System.out.println(request.getParameter("lastName"));
        System.out.println(request.getParameter("password"));
        
        

        JsonObject responseJson = new JsonObject();
        responseJson.addProperty("message", "Server:Hello!");

        response.setContentType("application/json");
        response.getWriter().write(gson.toJson(responseJson));

    }

}
