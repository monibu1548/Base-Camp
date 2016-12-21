package io.github.monibu1548;

import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.google.gson.Gson;

@org.springframework.web.bind.annotation.RestController

public class RestController {
	
	Gson gson = new Gson();
	java.util.Date dt = new java.util.Date();
	
	@Autowired
	private VisitDao visitDao;
	
	@RequestMapping(value="/api/writings/list", method=RequestMethod.GET)
	public String viewVisitList(){
		List<Writing> list = visitDao.getWritingsList();
		return gson.toJson(list);
	}

	@RequestMapping(value="/api/writings/{id}", method=RequestMethod.GET)
	public String addWriting(@PathVariable(value = "id") int id){
		Writing writing = visitDao.getWritingById(id);
		return gson.toJson(writing);
	}

	@RequestMapping(value="/api/writings/add", method=RequestMethod.POST)
	public String addVisitList(HttpServletRequest request){
		String email = request.getParameter("email");
		String pw = request.getParameter("pw");
		String text = request.getParameter("text");

		java.text.SimpleDateFormat sdf = 
		     new java.text.SimpleDateFormat("yyyy-MM-dd HH:mm:ss");

		String reg_time = sdf.format(dt);
		visitDao.addWriting(email, pw, text, reg_time);
		return "OK";
	}
	
	@RequestMapping(value="/api/writings/{id}", method=RequestMethod.PUT)
	public String modifyVisitBook(@PathVariable(value = "id") int id, HttpServletRequest request){
		
		String inputPw = request.getParameter("pw");
		String originPw = visitDao.getPwById(id);

		if (inputPw.equals(originPw)){
			String text = request.getParameter("text");
			
			java.text.SimpleDateFormat sdf = 
				     new java.text.SimpleDateFormat("yyyy-MM-dd HH:mm:ss");

			String mod_time = sdf.format(dt);

			visitDao.updateWritingById(id, text, mod_time);

			return "OK";
		}
		return "FAIL";
	}

	@RequestMapping(value="/api/writings/{id}", method=RequestMethod.DELETE)
	public String delVisitBook(@PathVariable(value = "id") int id, HttpServletRequest request){
		
		String inputPw = request.getParameter("pw");
		String originPw = visitDao.getPwById(id);

		if (inputPw.equals(originPw)){
			visitDao.deleteWritingById(id);
			return "OK";
		}
		return "FAIL";
	}
}
