package io.github.monibu1548;

import java.util.HashMap;
import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository("VisitDao")
public class VisitDaoImpl implements VisitDao{

	@Autowired
	private SqlSession sqlSession;
	
	public void setSqlSession(SqlSession sqlSession) {
		this.sqlSession = sqlSession;
	}
	@Override
	public List<Writing> getWritingsList() {
		List<Writing> temp = sqlSession.selectList("getWritingsList");
		return temp;
	}
	@Override
	public Writing getWritingById(int id) {
		return sqlSession.selectOne("getWritingById", id);
	}
	@Override
	public void addWriting(String email, String pw, String text, String reg_date) {
		HashMap<String, String> map = new HashMap<String, String>();
		map.put("email", email);
		map.put("pw", pw);
		map.put("text", text);
		map.put("reg_date", reg_date);
		sqlSession.insert("addWriting", map);
		return;
	}
	@Override
	public void updateWritingById(int id, String text, String mod_date) {
		HashMap<String, String> map = new HashMap<String, String>();
		map.put("id", String.valueOf(id));
		map.put("text", text);
		map.put("mod_date", mod_date);
		sqlSession.update("updateWritingById", map);
		return;
	}
	@Override
	public String getPwById(int id) {
		return sqlSession.selectOne("getPwById", id);
	}
	@Override
	public void deleteWritingById(int id) {
		sqlSession.delete("deleteWritingById", id);
		return;
	}

}
