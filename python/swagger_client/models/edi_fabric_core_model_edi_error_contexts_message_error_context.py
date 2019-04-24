# coding: utf-8

"""
    EdiFabric API

    No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)  # noqa: E501

    OpenAPI spec version: v1
    
    Generated by: https://github.com/swagger-api/swagger-codegen.git
"""


import pprint
import re  # noqa: F401

import six

from swagger_client.models.edi_fabric_core_model_edi_error_contexts_segment_error_context import EdiFabricCoreModelEdiErrorContextsSegmentErrorContext  # noqa: F401,E501


class EdiFabricCoreModelEdiErrorContextsMessageErrorContext(object):
    """NOTE: This class is auto generated by the swagger code generator program.

    Do not edit the class manually.
    """

    """
    Attributes:
      swagger_types (dict): The key is attribute name
                            and the value is attribute type.
      attribute_map (dict): The key is attribute name
                            and the value is json key in definition.
    """
    swagger_types = {
        'name': 'str',
        'control_number': 'str',
        'version': 'str',
        'codes': 'list[str]',
        'errors': 'list[EdiFabricCoreModelEdiErrorContextsSegmentErrorContext]',
        'has_errors': 'bool',
        'message': 'str'
    }

    attribute_map = {
        'name': 'name',
        'control_number': 'controlNumber',
        'version': 'version',
        'codes': 'codes',
        'errors': 'errors',
        'has_errors': 'hasErrors',
        'message': 'message'
    }

    def __init__(self, name=None, control_number=None, version=None, codes=None, errors=None, has_errors=None, message=None):  # noqa: E501
        """EdiFabricCoreModelEdiErrorContextsMessageErrorContext - a model defined in Swagger"""  # noqa: E501

        self._name = None
        self._control_number = None
        self._version = None
        self._codes = None
        self._errors = None
        self._has_errors = None
        self._message = None
        self.discriminator = None

        if name is not None:
            self.name = name
        if control_number is not None:
            self.control_number = control_number
        if version is not None:
            self.version = version
        if codes is not None:
            self.codes = codes
        if errors is not None:
            self.errors = errors
        if has_errors is not None:
            self.has_errors = has_errors
        if message is not None:
            self.message = message

    @property
    def name(self):
        """Gets the name of this EdiFabricCoreModelEdiErrorContextsMessageErrorContext.  # noqa: E501


        :return: The name of this EdiFabricCoreModelEdiErrorContextsMessageErrorContext.  # noqa: E501
        :rtype: str
        """
        return self._name

    @name.setter
    def name(self, name):
        """Sets the name of this EdiFabricCoreModelEdiErrorContextsMessageErrorContext.


        :param name: The name of this EdiFabricCoreModelEdiErrorContextsMessageErrorContext.  # noqa: E501
        :type: str
        """

        self._name = name

    @property
    def control_number(self):
        """Gets the control_number of this EdiFabricCoreModelEdiErrorContextsMessageErrorContext.  # noqa: E501


        :return: The control_number of this EdiFabricCoreModelEdiErrorContextsMessageErrorContext.  # noqa: E501
        :rtype: str
        """
        return self._control_number

    @control_number.setter
    def control_number(self, control_number):
        """Sets the control_number of this EdiFabricCoreModelEdiErrorContextsMessageErrorContext.


        :param control_number: The control_number of this EdiFabricCoreModelEdiErrorContextsMessageErrorContext.  # noqa: E501
        :type: str
        """

        self._control_number = control_number

    @property
    def version(self):
        """Gets the version of this EdiFabricCoreModelEdiErrorContextsMessageErrorContext.  # noqa: E501


        :return: The version of this EdiFabricCoreModelEdiErrorContextsMessageErrorContext.  # noqa: E501
        :rtype: str
        """
        return self._version

    @version.setter
    def version(self, version):
        """Sets the version of this EdiFabricCoreModelEdiErrorContextsMessageErrorContext.


        :param version: The version of this EdiFabricCoreModelEdiErrorContextsMessageErrorContext.  # noqa: E501
        :type: str
        """

        self._version = version

    @property
    def codes(self):
        """Gets the codes of this EdiFabricCoreModelEdiErrorContextsMessageErrorContext.  # noqa: E501


        :return: The codes of this EdiFabricCoreModelEdiErrorContextsMessageErrorContext.  # noqa: E501
        :rtype: list[str]
        """
        return self._codes

    @codes.setter
    def codes(self, codes):
        """Sets the codes of this EdiFabricCoreModelEdiErrorContextsMessageErrorContext.


        :param codes: The codes of this EdiFabricCoreModelEdiErrorContextsMessageErrorContext.  # noqa: E501
        :type: list[str]
        """
        allowed_values = ["TransactionSetNotSupported", "MessageTrailerMissing", "ControlNumberNotMatching", "SegmentsCountNotMatching", "MessageWithErrors", "MissingOrInvalidTransactionSet", "MissingOrInvalidControlNumber", "DuplicateMessageControlNumber", "FunctionalGroupVersionNotSupported"]  # noqa: E501
        if not set(codes).issubset(set(allowed_values)):
            raise ValueError(
                "Invalid values for `codes` [{0}], must be a subset of [{1}]"  # noqa: E501
                .format(", ".join(map(str, set(codes) - set(allowed_values))),  # noqa: E501
                        ", ".join(map(str, allowed_values)))
            )

        self._codes = codes

    @property
    def errors(self):
        """Gets the errors of this EdiFabricCoreModelEdiErrorContextsMessageErrorContext.  # noqa: E501


        :return: The errors of this EdiFabricCoreModelEdiErrorContextsMessageErrorContext.  # noqa: E501
        :rtype: list[EdiFabricCoreModelEdiErrorContextsSegmentErrorContext]
        """
        return self._errors

    @errors.setter
    def errors(self, errors):
        """Sets the errors of this EdiFabricCoreModelEdiErrorContextsMessageErrorContext.


        :param errors: The errors of this EdiFabricCoreModelEdiErrorContextsMessageErrorContext.  # noqa: E501
        :type: list[EdiFabricCoreModelEdiErrorContextsSegmentErrorContext]
        """

        self._errors = errors

    @property
    def has_errors(self):
        """Gets the has_errors of this EdiFabricCoreModelEdiErrorContextsMessageErrorContext.  # noqa: E501


        :return: The has_errors of this EdiFabricCoreModelEdiErrorContextsMessageErrorContext.  # noqa: E501
        :rtype: bool
        """
        return self._has_errors

    @has_errors.setter
    def has_errors(self, has_errors):
        """Sets the has_errors of this EdiFabricCoreModelEdiErrorContextsMessageErrorContext.


        :param has_errors: The has_errors of this EdiFabricCoreModelEdiErrorContextsMessageErrorContext.  # noqa: E501
        :type: bool
        """

        self._has_errors = has_errors

    @property
    def message(self):
        """Gets the message of this EdiFabricCoreModelEdiErrorContextsMessageErrorContext.  # noqa: E501


        :return: The message of this EdiFabricCoreModelEdiErrorContextsMessageErrorContext.  # noqa: E501
        :rtype: str
        """
        return self._message

    @message.setter
    def message(self, message):
        """Sets the message of this EdiFabricCoreModelEdiErrorContextsMessageErrorContext.


        :param message: The message of this EdiFabricCoreModelEdiErrorContextsMessageErrorContext.  # noqa: E501
        :type: str
        """

        self._message = message

    def to_dict(self):
        """Returns the model properties as a dict"""
        result = {}

        for attr, _ in six.iteritems(self.swagger_types):
            value = getattr(self, attr)
            if isinstance(value, list):
                result[attr] = list(map(
                    lambda x: x.to_dict() if hasattr(x, "to_dict") else x,
                    value
                ))
            elif hasattr(value, "to_dict"):
                result[attr] = value.to_dict()
            elif isinstance(value, dict):
                result[attr] = dict(map(
                    lambda item: (item[0], item[1].to_dict())
                    if hasattr(item[1], "to_dict") else item,
                    value.items()
                ))
            else:
                result[attr] = value
        if issubclass(EdiFabricCoreModelEdiErrorContextsMessageErrorContext, dict):
            for key, value in self.items():
                result[key] = value

        return result

    def to_str(self):
        """Returns the string representation of the model"""
        return pprint.pformat(self.to_dict())

    def __repr__(self):
        """For `print` and `pprint`"""
        return self.to_str()

    def __eq__(self, other):
        """Returns true if both objects are equal"""
        if not isinstance(other, EdiFabricCoreModelEdiErrorContextsMessageErrorContext):
            return False

        return self.__dict__ == other.__dict__

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        return not self == other