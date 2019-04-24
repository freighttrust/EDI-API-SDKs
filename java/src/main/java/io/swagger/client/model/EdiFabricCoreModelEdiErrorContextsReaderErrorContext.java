/*
 * EdiFabric API
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: v1
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */


package io.swagger.client.model;

import java.util.Objects;
import java.util.Arrays;
import com.google.gson.TypeAdapter;
import com.google.gson.annotations.JsonAdapter;
import com.google.gson.annotations.SerializedName;
import com.google.gson.stream.JsonReader;
import com.google.gson.stream.JsonWriter;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import io.swagger.client.model.EdiFabricCoreModelEdiErrorContextsMessageErrorContext;
import java.io.IOException;

/**
 * EdiFabricCoreModelEdiErrorContextsReaderErrorContext
 */
@javax.annotation.Generated(value = "io.swagger.codegen.languages.JavaClientCodegen", date = "2019-04-24T17:09:45.649Z")
public class EdiFabricCoreModelEdiErrorContextsReaderErrorContext {
  /**
   * Gets or Sets readerErrorCode
   */
  @JsonAdapter(ReaderErrorCodeEnum.Adapter.class)
  public enum ReaderErrorCodeEnum {
    UNKNOWN("Unknown"),
    
    INVALIDSPECORASSEMBLY("InvalidSpecOrAssembly"),
    
    INVALIDCONTROLSTRUCTURE("InvalidControlStructure"),
    
    IMPROPERENDOFFILE("ImproperEndOfFile"),
    
    INVALIDINTERCHANGECONTENT("InvalidInterchangeContent"),
    
    DEMOVERSION("DemoVersion");

    private String value;

    ReaderErrorCodeEnum(String value) {
      this.value = value;
    }

    public String getValue() {
      return value;
    }

    @Override
    public String toString() {
      return String.valueOf(value);
    }

    public static ReaderErrorCodeEnum fromValue(String text) {
      for (ReaderErrorCodeEnum b : ReaderErrorCodeEnum.values()) {
        if (String.valueOf(b.value).equals(text)) {
          return b;
        }
      }
      return null;
    }

    public static class Adapter extends TypeAdapter<ReaderErrorCodeEnum> {
      @Override
      public void write(final JsonWriter jsonWriter, final ReaderErrorCodeEnum enumeration) throws IOException {
        jsonWriter.value(enumeration.getValue());
      }

      @Override
      public ReaderErrorCodeEnum read(final JsonReader jsonReader) throws IOException {
        String value = jsonReader.nextString();
        return ReaderErrorCodeEnum.fromValue(String.valueOf(value));
      }
    }
  }

  @SerializedName("readerErrorCode")
  private ReaderErrorCodeEnum readerErrorCode = null;

  @SerializedName("messageErrorContext")
  private EdiFabricCoreModelEdiErrorContextsMessageErrorContext messageErrorContext = null;

  @SerializedName("message")
  private String message = null;

  public EdiFabricCoreModelEdiErrorContextsReaderErrorContext readerErrorCode(ReaderErrorCodeEnum readerErrorCode) {
    this.readerErrorCode = readerErrorCode;
    return this;
  }

   /**
   * Get readerErrorCode
   * @return readerErrorCode
  **/
  @ApiModelProperty(value = "")
  public ReaderErrorCodeEnum getReaderErrorCode() {
    return readerErrorCode;
  }

  public void setReaderErrorCode(ReaderErrorCodeEnum readerErrorCode) {
    this.readerErrorCode = readerErrorCode;
  }

  public EdiFabricCoreModelEdiErrorContextsReaderErrorContext messageErrorContext(EdiFabricCoreModelEdiErrorContextsMessageErrorContext messageErrorContext) {
    this.messageErrorContext = messageErrorContext;
    return this;
  }

   /**
   * Get messageErrorContext
   * @return messageErrorContext
  **/
  @ApiModelProperty(value = "")
  public EdiFabricCoreModelEdiErrorContextsMessageErrorContext getMessageErrorContext() {
    return messageErrorContext;
  }

  public void setMessageErrorContext(EdiFabricCoreModelEdiErrorContextsMessageErrorContext messageErrorContext) {
    this.messageErrorContext = messageErrorContext;
  }

  public EdiFabricCoreModelEdiErrorContextsReaderErrorContext message(String message) {
    this.message = message;
    return this;
  }

   /**
   * Get message
   * @return message
  **/
  @ApiModelProperty(value = "")
  public String getMessage() {
    return message;
  }

  public void setMessage(String message) {
    this.message = message;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    EdiFabricCoreModelEdiErrorContextsReaderErrorContext ediFabricCoreModelEdiErrorContextsReaderErrorContext = (EdiFabricCoreModelEdiErrorContextsReaderErrorContext) o;
    return Objects.equals(this.readerErrorCode, ediFabricCoreModelEdiErrorContextsReaderErrorContext.readerErrorCode) &&
        Objects.equals(this.messageErrorContext, ediFabricCoreModelEdiErrorContextsReaderErrorContext.messageErrorContext) &&
        Objects.equals(this.message, ediFabricCoreModelEdiErrorContextsReaderErrorContext.message);
  }

  @Override
  public int hashCode() {
    return Objects.hash(readerErrorCode, messageErrorContext, message);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class EdiFabricCoreModelEdiErrorContextsReaderErrorContext {\n");
    
    sb.append("    readerErrorCode: ").append(toIndentedString(readerErrorCode)).append("\n");
    sb.append("    messageErrorContext: ").append(toIndentedString(messageErrorContext)).append("\n");
    sb.append("    message: ").append(toIndentedString(message)).append("\n");
    sb.append("}");
    return sb.toString();
  }

  /**
   * Convert the given object to string with each line indented by 4 spaces
   * (except the first line).
   */
  private String toIndentedString(java.lang.Object o) {
    if (o == null) {
      return "null";
    }
    return o.toString().replace("\n", "\n    ");
  }

}

