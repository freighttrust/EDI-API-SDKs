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
import java.io.IOException;

/**
 * EdiFabricCoreModelEdiErrorContextsDataElementErrorContext
 */
@javax.annotation.Generated(value = "io.swagger.codegen.languages.JavaClientCodegen", date = "2019-04-24T17:09:45.649Z")
public class EdiFabricCoreModelEdiErrorContextsDataElementErrorContext {
  @SerializedName("name")
  private String name = null;

  @SerializedName("position")
  private Integer position = null;

  /**
   * Gets or Sets code
   */
  @JsonAdapter(CodeEnum.Adapter.class)
  public enum CodeEnum {
    REQUIREDDATAELEMENTMISSING("RequiredDataElementMissing"),
    
    CONDITIONALREQUIREDDATAELEMENTMISSING("ConditionalRequiredDataElementMissing"),
    
    TOOMANYDATAELEMENTS("TooManyDataElements"),
    
    DATAELEMENTTOOSHORT("DataElementTooShort"),
    
    DATAELEMENTTOOLONG("DataElementTooLong"),
    
    INVALIDCHARACTERINDATAELEMENT("InvalidCharacterInDataElement"),
    
    INVALIDCODEVALUE("InvalidCodeValue"),
    
    INVALIDDATE("InvalidDate"),
    
    INVALIDTIME("InvalidTime"),
    
    EXCLUSIONCONDITIONVIOLATED("ExclusionConditionViolated"),
    
    TOOMANYREPETITIONS("TooManyRepetitions"),
    
    TOOMANYCOMPONENTS("TooManyComponents"),
    
    TOOFEWREPETITIONS("TooFewRepetitions");

    private String value;

    CodeEnum(String value) {
      this.value = value;
    }

    public String getValue() {
      return value;
    }

    @Override
    public String toString() {
      return String.valueOf(value);
    }

    public static CodeEnum fromValue(String text) {
      for (CodeEnum b : CodeEnum.values()) {
        if (String.valueOf(b.value).equals(text)) {
          return b;
        }
      }
      return null;
    }

    public static class Adapter extends TypeAdapter<CodeEnum> {
      @Override
      public void write(final JsonWriter jsonWriter, final CodeEnum enumeration) throws IOException {
        jsonWriter.value(enumeration.getValue());
      }

      @Override
      public CodeEnum read(final JsonReader jsonReader) throws IOException {
        String value = jsonReader.nextString();
        return CodeEnum.fromValue(String.valueOf(value));
      }
    }
  }

  @SerializedName("code")
  private CodeEnum code = null;

  @SerializedName("value")
  private String value = null;

  @SerializedName("componentPosition")
  private Integer componentPosition = null;

  @SerializedName("repetitionPosition")
  private Integer repetitionPosition = null;

  @SerializedName("message")
  private String message = null;

  public EdiFabricCoreModelEdiErrorContextsDataElementErrorContext name(String name) {
    this.name = name;
    return this;
  }

   /**
   * Get name
   * @return name
  **/
  @ApiModelProperty(value = "")
  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }

  public EdiFabricCoreModelEdiErrorContextsDataElementErrorContext position(Integer position) {
    this.position = position;
    return this;
  }

   /**
   * Get position
   * @return position
  **/
  @ApiModelProperty(value = "")
  public Integer getPosition() {
    return position;
  }

  public void setPosition(Integer position) {
    this.position = position;
  }

  public EdiFabricCoreModelEdiErrorContextsDataElementErrorContext code(CodeEnum code) {
    this.code = code;
    return this;
  }

   /**
   * Get code
   * @return code
  **/
  @ApiModelProperty(value = "")
  public CodeEnum getCode() {
    return code;
  }

  public void setCode(CodeEnum code) {
    this.code = code;
  }

  public EdiFabricCoreModelEdiErrorContextsDataElementErrorContext value(String value) {
    this.value = value;
    return this;
  }

   /**
   * Get value
   * @return value
  **/
  @ApiModelProperty(value = "")
  public String getValue() {
    return value;
  }

  public void setValue(String value) {
    this.value = value;
  }

  public EdiFabricCoreModelEdiErrorContextsDataElementErrorContext componentPosition(Integer componentPosition) {
    this.componentPosition = componentPosition;
    return this;
  }

   /**
   * Get componentPosition
   * @return componentPosition
  **/
  @ApiModelProperty(value = "")
  public Integer getComponentPosition() {
    return componentPosition;
  }

  public void setComponentPosition(Integer componentPosition) {
    this.componentPosition = componentPosition;
  }

  public EdiFabricCoreModelEdiErrorContextsDataElementErrorContext repetitionPosition(Integer repetitionPosition) {
    this.repetitionPosition = repetitionPosition;
    return this;
  }

   /**
   * Get repetitionPosition
   * @return repetitionPosition
  **/
  @ApiModelProperty(value = "")
  public Integer getRepetitionPosition() {
    return repetitionPosition;
  }

  public void setRepetitionPosition(Integer repetitionPosition) {
    this.repetitionPosition = repetitionPosition;
  }

  public EdiFabricCoreModelEdiErrorContextsDataElementErrorContext message(String message) {
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
    EdiFabricCoreModelEdiErrorContextsDataElementErrorContext ediFabricCoreModelEdiErrorContextsDataElementErrorContext = (EdiFabricCoreModelEdiErrorContextsDataElementErrorContext) o;
    return Objects.equals(this.name, ediFabricCoreModelEdiErrorContextsDataElementErrorContext.name) &&
        Objects.equals(this.position, ediFabricCoreModelEdiErrorContextsDataElementErrorContext.position) &&
        Objects.equals(this.code, ediFabricCoreModelEdiErrorContextsDataElementErrorContext.code) &&
        Objects.equals(this.value, ediFabricCoreModelEdiErrorContextsDataElementErrorContext.value) &&
        Objects.equals(this.componentPosition, ediFabricCoreModelEdiErrorContextsDataElementErrorContext.componentPosition) &&
        Objects.equals(this.repetitionPosition, ediFabricCoreModelEdiErrorContextsDataElementErrorContext.repetitionPosition) &&
        Objects.equals(this.message, ediFabricCoreModelEdiErrorContextsDataElementErrorContext.message);
  }

  @Override
  public int hashCode() {
    return Objects.hash(name, position, code, value, componentPosition, repetitionPosition, message);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class EdiFabricCoreModelEdiErrorContextsDataElementErrorContext {\n");
    
    sb.append("    name: ").append(toIndentedString(name)).append("\n");
    sb.append("    position: ").append(toIndentedString(position)).append("\n");
    sb.append("    code: ").append(toIndentedString(code)).append("\n");
    sb.append("    value: ").append(toIndentedString(value)).append("\n");
    sb.append("    componentPosition: ").append(toIndentedString(componentPosition)).append("\n");
    sb.append("    repetitionPosition: ").append(toIndentedString(repetitionPosition)).append("\n");
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

