package io.github.monibu1548;

import java.sql.SQLException;
import java.util.List;

public interface VisitDao {
	List<Writing> getWritingsList();
	Writing getWritingById(int id);
    void addWriting(String email, String pw, String text, String reg_date);
	void updateWritingById(int id, String text, String mod_date);
	String getPwById(int id);
	void deleteWritingById(int id);
}
