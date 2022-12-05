package project.cookdoc.model;

import java.math.BigDecimal;
import java.math.BigInteger;
import java.util.Date;
import java.util.HashMap;
import java.util.Iterator;
import java.util.Map;

import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Component;

@Component
@Qualifier("payload")
public class Payload extends HashMap<String, Object> {

    private static final long serialVersionUID = 1L;

    public Payload() {

    }

    public <E> Payload(Map<String, Object> map) {
        if (map != null) {
            Iterator<String> mapIt = map.keySet().iterator();

            while (mapIt.hasNext()) {
                String key = (String) mapIt.next();

                this.set(key, map.get(key));
            }
        }
    }

    public <E> Payload set(String key, E obj) {
        super.put(key, obj);
        return this;
    }

    public int getInt(String key) {
        Object obj = this.get(key);
        int result = 0;
        if (obj != null) {
            if (obj instanceof String) {
                result = Integer.parseInt((String) obj);
            } else if (obj instanceof Integer) {
                result = (Integer) obj;
            } else if (obj instanceof Long) {
                result = ((Long) obj).intValue();
            } else if (obj instanceof Double) {
                result = ((Double) obj).intValue();
            } else if (obj instanceof Float) {
                result = ((Float) obj).intValue();
            } else if (obj instanceof Short) {
                result = ((Short) obj).intValue();
            } else if (obj instanceof BigInteger) {
                result = ((BigInteger) obj).intValue();
            } else if (obj instanceof BigDecimal) {
                result = ((BigDecimal) obj).intValue();
            }
        }
        return result;
    }

    public String getString(String key) {
        Object obj = this.get(key);
        String result = "";
        if (obj != null) {
            if (obj instanceof String) {
                result = (String) obj;
            } else if (obj instanceof Integer) {
                result = obj.toString();
            } else if (obj instanceof Long) {
                result = obj.toString();
            } else if (obj instanceof Float) {
                result = obj.toString();
            } else if (obj instanceof Double) {
                result = obj.toString();
            } else if (obj instanceof Boolean) {
                result = obj.toString();
            } else if (obj instanceof Short) {
                result = obj.toString();
            } else if (obj instanceof Date) {
                result = obj.toString();
            } else if (obj instanceof BigInteger) {
                result = ((BigInteger) obj).toString();
            } else if (obj instanceof BigDecimal) {
                result = ((BigDecimal) obj).toString();
            }
        }
        return result;
    }
}